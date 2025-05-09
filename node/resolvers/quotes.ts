export const quotes = async (_: any, __: any, ctx: Context) => {
  const {
    clients: { masterData },
  } = ctx;

  try {
    const data = await masterData.getQuotes();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch quotes: ${error}`);
  }
};
