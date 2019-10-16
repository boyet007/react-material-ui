import React, { Component, Fragment } from 'react'
import { Header, Footer } from './layouts'
import Exercises from './exercises'
import { muscles, exercises } from '../store.js'

export default class App extends Component {
  state = {
    exercises,
    exercise: {},
    category: ''
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  getExercisesByMuscles() {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise
      exercises[muscles] = exercises[muscles] 
        ? [...exercises[muscles], exercise]
        : [exercise]

        return exercises
      }, {})
    )
  }

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state
    return (
      <Fragment>
        <Header />
        <Exercises exercise={exercise} category={category} onSelect={this.handleExerciseSelected}
           exercises={exercises}/>
        <Footer category={category} onSelect={this.handleCategorySelected} muscles={muscles} />
      </Fragment>
    )
  }
}
