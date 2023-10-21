const API_LINK = 'https://navirego-interview-mc3narrsb-volodymyr-matselyukh.vercel.app/api/letters'

export const fetchData = async (checkboxNumber: number) => {
    try {
        const response = await fetch(`${API_LINK}/${checkboxNumber}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};