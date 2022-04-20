export function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export async function urlExists(url, callback) {
    await fetch(url, { mode: 'no-cors' })
    .then(function(status) {
    callback(status.ok)
  });
}
