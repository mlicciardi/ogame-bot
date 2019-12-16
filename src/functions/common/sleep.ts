const DefaultSleepDelay = 1000;

export async function sleep(ms: number = DefaultSleepDelay): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
