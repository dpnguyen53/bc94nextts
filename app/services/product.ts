export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://apistore.cybersoft.edu.vn/api/Product",
      {
        next: { revalidate: 10 },
      },
    );

    const result = await response.json();
    return result.content;
  } catch (error) {
    throw error;
  }
};

export const fetchDataById = async (id: string) => {
  try {
    const response = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`,
    );

    const result = await response.json();
    return result.content;
  } catch (error) {
    throw error;
  }
};

export const fetchDataByKeyword = async (keyword: string) => {
  try {
    const response = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`,
    );

    const result = await response.json();
    return result.content;
  } catch (error) {
    throw error;
  }
};
