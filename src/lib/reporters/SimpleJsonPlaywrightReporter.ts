import fs from 'fs';
import path from 'path';
import type {
    Reporter,
    FullConfig,
    Suite,
    TestCase,
    TestResult,
    FullResult,
} from '@playwright/test/reporter';

type SimpleTestResult = { test: string; status: string };

class SimpleJsonPlaywrightReporter implements Reporter {
    private results: SimpleTestResult[] = [];
    private runId: string;
    private debug: boolean;

    constructor(options: { runId: string; debug?: boolean }) {
        this.runId = options.runId;
        this.debug = options.debug ?? false; // Enable debug mode optionally
        this.log(`Initialized reporter with Run ID: ${this.runId}`);
    }

    private log(message: string): void {
        if (this.debug) {
            console.log(message);
        }
    }

    onBegin(config: FullConfig, suite: Suite): void {
        this.log(`Starting the run with ${suite.allTests().length} tests`);
    }

    onTestBegin(test: TestCase): void {
        this.log(`Starting test ${test.title}`);
    }

    onTestEnd(test: TestCase, result: TestResult): void {
        this.log(`Finished test ${test.title}: ${result.status}`);
        this.results.push({ test: test.title, status: result.status });
    }

    async onEnd(result: FullResult): Promise<void> {
        const filename = this.runId
            ? `test-results-${this.runId}`
            : 'test-results';
        const outputPath = path.join(process.cwd(), `${filename}.json`);

        try {
            await fs.promises.writeFile(
                outputPath,
                JSON.stringify(this.results, null, 2)
            );
            this.log(`Results successfully written to ${outputPath}`);
        } catch (error) {
            console.error(`Failed to write results to ${outputPath}: ${error}`);
        }
    }
}

export default SimpleJsonPlaywrightReporter;
