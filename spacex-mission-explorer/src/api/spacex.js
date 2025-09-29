const BASE_URL = 'https://api.spacexdata.com/v4';

export async function fetchLaunches() {
  try {
    const response = await fetch(`${BASE_URL}/launches`);
    if (!response.ok) throw new Error('Failed to fetch launches');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching launches:', error);
    return [];
  }
}

export async function fetchRockets() {
  try {
    const response = await fetch(`${BASE_URL}/rockets`);
    if (!response.ok) throw new Error('Failed to fetch rockets');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching rockets:', error);
    return [];
  }
}
