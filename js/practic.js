// const playlist = {
//     name: "Мой плейлист",
//     rating: 5,
//     tracks: ["трек-1", "трек-2", "трек-3"],
//     trackCount: 3,
//     changeName(newName) {
//         //console.log("this внутри changeName: ", this);

//         this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track);
//     },
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     }
// };

// playlist.changeName("Новое имя");

// playlist.addTrack("Новый трек")

// playlist.updateRating(4);

//console.log(playlist);




// Поиск самой маленькой или большой температуры (числа) 

const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

// console.log(temps);



//Сшиваем несколько массивов в один через concat() и spread

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const xx = lastWeekTemps.concat(currentTemps, nextWeekTemps);

const allTemps = [
    ...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// console.log(xx);
// console.log(allTemps);



// Распыление объектов
// - Object.prototype.assign() и spread
const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

//const c = Object.assign({ name: 'Mango' }, a, b);

const c = {
    name: 'Mango',
    ...a, 
    x: 15,
    ...b,
    y: 20,
};

// console.log(c)


const defaultSettings = {
    theme: 'light',
    showNotifications: true,
    hideSidebar: false,
};

const userSettings = {
    showNotifications: false,
    hideSidebar: true,
};

const finalSettings = {
    ...defaultSettings,
    ...userSettings,
}

// console.log(finalSettings);



// Деструктуризация объекта

const playlist = {
    name: 'Мой супер плейлист',
    ratting: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
};

const { 
    ratting, 
    tracks, 
    name, 
    trackCount: numberOfTracks = 0, // Переназвание объекта
    actour = 'us'} = playlist;

// console.log(numberOfTracks);

// console.log(playlist);




// Глубокая деструктуризация 

const profile = {
    names: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/ulfaces/twitter/r_oy/128.jpg',
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};

const {
    names, 
    tag,
    location,
    avatar,
    stats: {followers, views, likes},
} = profile;

//const {followers, views, likes} = stats;  //Эта строка аналогична строке 140

console.log(names, tag, location, followers, views, likes);