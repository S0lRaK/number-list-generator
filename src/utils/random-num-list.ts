export const getRandomNumList = (
  lowerBoundNum: number = 1,
  upperBoundNum: number = 1000,
  selectedNums: number = 1000,
  isUpperBoundInclusive: boolean = true
) => {
  const orderedNumList: number[] = []

  if (isUpperBoundInclusive)
    for (let i: number = lowerBoundNum; i <= upperBoundNum; i++)
      orderedNumList.push(i)
  else
    for (let i: number = lowerBoundNum; i < upperBoundNum; i++)
      orderedNumList.push(i)

  let randomNumList: number[] = [...orderedNumList]

  /**
   * Shuffles the list of numbers passed, using the Fisher-Yates algorithm,
   * which provides no “sorting” overhead
   * 
   * The algorithm's time complexity is O(n)
   * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
   * 
   * @param list - The list of numbers to be shuffled
   * @returns A new list with the same amount of elements randomly
   */
  const shuffleList = (list: number[]) => {
    for (let i: number = list.length - 1; i > 0; i--) {
      let j: number = Math.floor(Math.random() * (i + 1))
      ;[list[i], list[j]] = [list[j], list[i]]
    }
  }

  shuffleList(randomNumList)

  return (randomNumList =
    selectedNums < randomNumList.length
      ? randomNumList.slice(0, selectedNums)
      : randomNumList)
}
