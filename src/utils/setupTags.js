export const setupTags = (recipes) => {
    const tempTags = {};

    recipes.forEach(recipe => {
        const tags = recipe.content.tags;

        tags.forEach((tag) => {
            if (tempTags.hasOwnProperty(tag)) {
                tempTags[tag] += 1;
            } else {
                tempTags[tag] = 1;
            }
        })
    });

    const allTags = Object.entries(tempTags).sort((a, b) => a[0].localeCompare(b[0]));

    return allTags;
}