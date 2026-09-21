

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getRestaurants(): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/restaurants`);

    if (!response.ok) {
      throw new Error(`Restaurants Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("Restaurants fetch error:", error);
    return [];
  }
}


export async function getBanners(latitude?: number, longitude?: number): Promise<any> {
  try {
    let url = `${BASE_URL}/banners`;

    if (latitude && longitude) {
      url += `?latitude=${latitude}&longitude=${longitude}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Banners Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("Banners fetch error:", error);
    return [];
  }
}


export async function getRestaurant(slug: any): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/restaurants/${slug}`);
    
    if (!response.ok) {
      throw new Error(`Restaurant Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("Restaurant fetch error:", error);
    return null;
  }
}



export async function getCategories(slug: any): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/restaurants/${slug}/categories`);

    if (!response.ok) {
      throw new Error(`Categories Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("Categories fetch error:", error);
    return [];
  }
}



export async function getProducts(slug: any): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/restaurants/${slug}/products`);
    if (!response.ok) {
      throw new Error(`Products Request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("Products fetch error:", error);
    return [];
  }
}




export async function getProduct(restaurantSlug: any, productSlug: any): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/restaurants/${restaurantSlug}/products/${productSlug}`);
    if (!response.ok) throw new Error(`Product Request failed with status ${response.status}`);
    const data = await response.json();
    return data.data;   // isme addon_groups bhi hoga
  } catch (error) {
    console.log("Product fetch error:", error);
    return null;
  }
}