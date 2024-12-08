module.exports = async (client) => {
  let statuses = [
    "Commands \"music.help\"",
    "SeitanMusic",
    "Spotify",
    "Music",
    "Deezer",
    "Youtube",
    "SoundCloud",
    "iTunes",
    "Amazon Music"
  ]

  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, {
      type: "LISTENING",
    });
  }, 1000);

  console.log(`[API] Logged in as ${client.user.username}`);
};