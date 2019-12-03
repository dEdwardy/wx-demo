const formatTime = date => {
  const d = new Date(date);
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const day = d.getDate()
  const hour = d.getHours()
  const minute = d.getMinutes()
  const second = d.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const formatMinutes = seconds => {
  const s = seconds% 60;
  const m = parseInt(seconds/60);
  return `m:s`
}
module.exports = {
  formatTime: formatTime,
  formatMinutes
}
