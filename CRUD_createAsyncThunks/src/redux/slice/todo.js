import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define an async thunk to fetch todos from an API
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    // Fetch data from the given URL
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    // Parse and return the JSON response
    return response.json();
});


// Create a slice of the Redux state for managing todos
const todoSlice = createSlice({
    name: "todo", // Name of the slice
    initialState: {
        isLoading: false, // Tracks loading state
        data: null,       // Holds the fetched data
        isError: false    // Tracks error state
    },
    extraReducers: builder => {
        // Handle the pending state of fetchTodos
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true; // Set loading state to true
        })
        // Handle the fulfilled state of fetchTodos
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false; // Set loading state to false
            state.data = action.payload; // Store the fetched data
        })
        // Handle the rejected state of fetchTodos
        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.log("error", action.payload); // Log the error payload
            state.isError = true; // Set error state to true
        })
    }
})

// Export the reducer function from the slice
export default todoSlice.reducer;
