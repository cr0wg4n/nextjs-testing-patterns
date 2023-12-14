import { it, describe, beforeEach, beforeAll, afterEach, afterAll } from 'vitest'


describe('<FILE_NAME>', () => {
  beforeAll(() => {
    console.log(`I'm always called once per complete run (before all the execution)`)
  })
  beforeEach(() => {
    console.log(`I'm always called before each test, that means once per it/test (2 times in this case)`)
  })

  it('<TEST_CASE_DESCRIPTION>', () => {
    // ARRANGE
    //...
    // ACT
    //...
    // ASSERT
    //...
  })
  // The general rule in every test is: ISOLATION
  it('<TEST_CASE_DESCRIPTION>', () => {
    // ARRANGE
    //...
    // ACT
    //...
    // ASSERT
    //...
  })

  afterEach(() => {
    console.log(`I'm always called after each test, that means once per it/test (2 times in this case)`)
  })
  afterAll(() => {
    console.log(`I'm always called once per complete run (after all the execution)`)
  })
})