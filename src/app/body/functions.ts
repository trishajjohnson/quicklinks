declare var require: any;
import { InjectionToken } from '@angular/core';
const isBrowser = () => localStorage.getItem("isBrowser") === "true";


export function sortByKey(array, key) {
    console.log('array in', array);
    array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    console.log('array out', array);
    return array;
}

export function promisify(data) {
    return new Promise( (resolve) => setTimeout(() => resolve(data)));
}

export function convert_addresses_v2_to_v3(addresses:[any]):[any] {
    // console.log('IN ===> addresses :', addresses);
    addresses.map(address => {
        address['state_or_province'] = address.state;
        address['postal_code'] = address.zip;
        address['country_code'] = address.country_iso2;
        address['address1'] = address.street_1;
        address['address2'] = address.street_2;
        return address;
    });
    // console.log('IN ===> addresses :', addresses);
    return addresses;
}


export const generateID = function (len) {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export const slugify = function (TexT) {
    TexT = TexT || "";
    return TexT.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
};

export const slugify2 = function (TexT) {
    TexT = TexT || "";
    return TexT.toLowerCase().replace(/[^\w ]+/g, '-').replace(/ +/g, '-');
};

// export const pURL = (product) => slugify(product.name);
export const pURL = (p) => {
    if (p.custom_url) {
        let x = p.custom_url.url.replaceAll('/', '');
        return `/product/${slugify2(x)}/${p.id}`;
    } else {
        return `/product/${slugify2(p.name)}/${p.product_id}`;
    }
};

String.prototype['replaceAll'] = function (search, replacement) {
    let target = this;
    return target.split(search).join(replacement);
};

export const timeout = function (ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

export const toArray = function (obj_obj) : any[] {
    if (typeof obj_obj == "object") {
        return Object.keys(obj_obj).map(i => obj_obj[i]);
    } else {
        return [];
    }
};
export const toArray_not = function (obj) {
    let final = [];
    if (typeof obj == "object") {
        Object.keys(obj).map(key => {
            return final.push(obj[key]);
        });
        return final;     
    } else {
        return [];
    }
};
export const toArray_alt = function (obj_obj) {
    return Object.keys(obj_obj).map(i => obj_obj[i]);
};

export const show: object = {
    i6: { w: 374 },
    i7: { w: 600 },
    pro13: { w: 1280 },
    pro15: { w: 1440 },
    pro27: { w: 2600 },
    ipadpro: { w: 1024, h: 1366 },
    upto: function (device, exclude) {
        exclude = (exclude) ? 2 : 0;
        return {
            sizes: {
                max: this[device].w - exclude,
                min: 300
            }
        };
    },
    downto: function (device, exclude) {
        exclude = (exclude) ? 2 : 0;
        return {
            sizes: {
                max: 3000,
                min: this[device].w + exclude
            }
        };
    },
    on: function (device, exclude) {
        exclude = (exclude) ? 2 : 0;
        return {
            sizes: {
                max: this[device].w - exclude,
                min: this[device].w + exclude
            }
        };
    },
};


const icon1 = function (icon) {
    let foo;
    switch (icon) {
        case 'checkIcon':
            foo = { icon: "/assets/img/notice-check.svg" };
            break;
        case 'errIcon':
            foo = { icon: "/assets/img/notice-err.svg" };
            break;
        case 'trashIcon':
            foo = { icon: "/assets/img/notice-trash.svg" };
            break;
        default:
            foo = null;
            break;
    }
    return foo;
};


const checkIcon = { icon: "/assets/img/notice-check.svg" };
const errIcon = { icon: "/assets/img/notice-err.svg" };
const trashIcon = { icon: "/assets/img/notice-trash.svg" };

const defaultParams = {
    timeout: 9000,
    showProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    position: 'rightTop',
    titleMaxLength: 30
};

export const conditionMap  = {
    "new": { bc: "New", sufx: "no", label: "New" },
    "refurbished": { bc: "Refurbished", sufx: "mr", label: "Manufacturer Refurbished" },
    "used": { bc: "Used", sufx: "rf", label: "Refurbished" },

    "manufacturer refurbished": { bc: "Refurbished", sufx: "mr", label: "Manufacturer Refurbished" },
}

export const notice = function (icon) {
    return Object.assign(defaultParams, icon1(icon));
};

export const productCondition = function (sku) {
    sku = sku.toLowerCase();
    if (sku.includes('/rf')) {
        return {
            val: "Refurbished",
            info: "an explination of Refurbished"
        };
    } else if (sku.includes('/no')) {
        return {
            val: "New",
            info: "an explination of New"
        };
    } else if (sku.includes('/ct')) {
        return {
            val: "New Configure",
            info: "an explination of New Configure"
        };
    } else if (sku.includes('/cr')) {
        return {
            val: "configured refurbished",
            info: "an explination of configured refurbished"
        };
    } else {
        return {
            val: "New",
            info: "an explination of New"
        };
    }
};


export const Loader: object = {
    // show: function () {
    //     if (isBrowser()) { $('.whiteout').fadeIn(200); }
    // },
    // hide: function () {
    //     if (isBrowser()) { $('.whiteout').fadeOut(200); }
    // }
};



export const states = [
    { name: 'ALABAMA', abv: 'AL' },
    { name: 'ALASKA', abv: 'AK' },
    { name: 'ARIZONA', abv: 'AZ' },
    { name: 'ARKANSAS', abv: 'AR' },
    { name: 'CALIFORNIA', abv: 'CA' },
    { name: 'COLORADO', abv: 'CO' },
    { name: 'CONNECTICUT', abv: 'CT' },
    { name: 'DELAWARE', abv: 'DE' },
    { name: 'FLORIDA', abv: 'FL' },
    { name: 'GEORGIA', abv: 'GA' },
    { name: 'HAWAII', abv: 'HI' },
    { name: 'IDAHO', abv: 'ID' },
    { name: 'ILLINOIS', abv: 'IL' },
    { name: 'INDIANA', abv: 'IN' },
    { name: 'IOWA', abv: 'IA' },
    { name: 'KANSAS', abv: 'KS' },
    { name: 'KENTUCKY', abv: 'KY' },
    { name: 'LOUISIANA', abv: 'LA' },
    { name: 'MAINE', abv: 'ME' },
    { name: 'MARYLAND', abv: 'MD' },
    { name: 'MASSACHUSETTS', abv: 'MA' },
    { name: 'MICHIGAN', abv: 'MI' },
    { name: 'MINNESOTA', abv: 'MN' },
    { name: 'MISSISSIPPI', abv: 'MS' },
    { name: 'MISSOURI', abv: 'MO' },
    { name: 'MONTANA', abv: 'MT' },
    { name: 'NEBRASKA', abv: 'NE' },
    { name: 'NEVADA', abv: 'NV' },
    { name: 'NEW HAMPSHIRE', abv: 'NH' },
    { name: 'NEW JERSEY', abv: 'NJ' },
    { name: 'NEW MEXICO', abv: 'NM' },
    { name: 'NEW YORK', abv: 'NY' },
    { name: 'NORTH CAROLINA', abv: 'NC' },
    { name: 'NORTH DAKOTA', abv: 'ND' },
    { name: 'OHIO', abv: 'OH' },
    { name: 'OKLAHOMA', abv: 'OK' },
    { name: 'OREGON', abv: 'OR' },
    { name: 'PENNSYLVANIA', abv: 'PA' },
    { name: 'RHODE ISLAND', abv: 'RI' },
    { name: 'SOUTH CAROLINA', abv: 'SC' },
    { name: 'SOUTH DAKOTA', abv: 'SD' },
    { name: 'TENNESSEE', abv: 'TN' },
    { name: 'TEXAS', abv: 'TX' },
    { name: 'UTAH', abv: 'UT' },
    { name: 'VERMONT', abv: 'VT' },
    { name: 'VIRGINIA', abv: 'VA' },
    { name: 'WASHINGTON', abv: 'WA' },
    { name: 'WEST VIRGINIA', abv: 'WV' },
    { name: 'WISCONSIN', abv: 'WI' },
    { name: 'WYOMING', abv: 'WY' }
];

export const keyVal = function (obj) {
    return Object.keys(obj).map(key => obj[key] = { id: key, ...obj[key] });
};

export const keyValAsKey = function (obj) {
    return Object.keys(obj).map(key => obj[key] = { key: key, ...obj[key] });
};

export const parseWYSIWYG = function (value: string) {
    // it's not perfect but it gets someting 98% working. Markups get replaced with a space which is a little too unspecific.
    return value.replace(/<[^>]+>/g, '').replace(/&[^>]+;/g,' ');
}

export const escapeHtml = s => (s + '').replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;',
    '"': '&quot;', "'": '&#39;'
})[m]);

export const VIEWER = new InjectionToken<string>('viewer');
export const CRAWLER_AGENTS = [
    'googlebot', 'yandexbot', 'yahoo', 'bingbot',
    'baiduspider', 'facebookexternalhit', 'twitterbot', 'rogerbot',
    'linkedinbot', 'embedly', 'quora link preview', 'showyoubot', 'outbrain',
    'pinterest/0.', 'developers.google.com/+/web/snippet',
    'slackbot', 'vkshare', 'w3c_validator', 'redditbot', 'applebot',
    'whatsapp', 'flipboard', 'tumblr', 'bitlybot', 'skypeuripreview',
    'nuzzel', 'discordbot', 'google page speed'
];

// export const Encode = (str) => btoa(str);
// export const Decode = (code) => atob(code);



// flamelink
// const flamelink = require('flamelink');
// const content = flamelink( environment.firebase ).content;























