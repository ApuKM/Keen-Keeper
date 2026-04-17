const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const friendsPromise = async () => {
  const res = await fetch(`${baseUrl}/data.json`, {
    cache: "no-store",
  });
  return res.json();
};
