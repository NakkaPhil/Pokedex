import { configureStore } from '@reduxjs/toolkit'
import Name from './slices/trainerName.slice'

export default configureStore({
  reducer: {
    Name: Name
	}
})
