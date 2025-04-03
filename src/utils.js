const base = import.meta.env.BASE_URL;

export const getImageUrl = (path) => {
    return `${base}assets/${path}`;
};

