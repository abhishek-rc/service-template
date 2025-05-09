export const GetQuotes = async (_: any, __: any, ctx: Context) => {
  const {
    
    clients: { CustomMasterData  },
  } = ctx;

  try {
    const data = await CustomMasterData.getQuotes();
    console.log(data)
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch quotes: ${error}`);
  }
};
