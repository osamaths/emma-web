export const formatAnswer = (ans = "") => {
    if (ans.length <= 10) return ans;

    const shortted = maxCharacters(ans, 7);
    return shortted + "...";
};

export const maxCharacters = (ans = "", max = 0) => ans.substring(0, max);
