/**
 * Gets the setting specified by key. If the Setting doesn't exist it will be created with the default value def
 * @param {String} key - setting name
 * @param {String} def - (optional) default value
 * @returns String value of setting
 */
function getSetting(key, def=null) {
    const value = localStorage.getItem(key);

    if (!value) {
        setSetting(key, def);
        return def;
    }
    return value;
}

/**
 * Sets the setting specified by key.
 * @param {String} key - setting name
 * @param {String} value - value to set
 */
function setSetting(key, value) {
    localStorage.setItem(key, value);
}

export {getSetting, setSetting};
