
export const TimeCount = (left: number, right: number) => {
  const allMin = Math.floor(right / 60)
  console.log(allMin)
  const currentMin = Math.floor(left / 60)
  const allSec = Math.abs(right - allMin * 60)
  const currentSec = Math.abs(left - currentMin * 60)
  return `${`0${currentMin}`.slice(-2)}:${`0${currentSec}`.slice(-2)} / ${`0${allMin}`.slice(-2)}:${`0${allSec}`.slice(-2)}`
}