export const MOCK_CHALLENGES = {
  challenges: [
    {
      id: 1,
      technology: ["Python"],
      category: "Python",
      difficulty: "Easy",
      duration: "60 mins",
      task: "Sum even numbers",
      details:
        "Write a Python function that takes a list of integers and returns the sum of all even numbers.",
      detailedProblem: {
        description:
          "Given a list of integers, write a function that returns the sum of all even numbers in the list.",
        examples: [
          {
            input: "[1, 2, 3, 4, 5]",
            output: "6",
            explanation:
              "The even numbers in the list are 2 and 4. Their sum is 2 + 4 = 6.",
          },
          {
            input: "[7, 11, 13, 17]",
            output: "0",
            explanation:
              "There are no even numbers in the list, so the sum is 0.",
          },
          {
            input: "[2, 4, 6, 8]",
            output: "20",
            explanation:
              "All numbers in the list are even, so the sum is 2 + 4 + 6 + 8 = 20.",
          },
        ],
        constraints: [
          "The list can contain negative integers.",
          "The list can contain at most 10^4 integers.",
        ],
        solutionApproach: [
          "Loop through the list of integers.",
          "Use a conditional check to see if a number is even (i.e., divisible by 2).",
          "Sum up all the even numbers and return the result.",
        ],
      },
    },
    {
      id: 2,
      technology: ["Python"],
      category: "Python",
      difficulty: "Intermediate",
      duration: "60 mins",
      task: "Anagram check",
      details:
        "Write a Python function to check if two strings are anagrams, ignoring spaces and capitalization.",
      detailedProblem: {
        description:
          "Given two strings, write a function to determine if the strings are anagrams of each other. An anagram is formed by rearranging the letters of another word using all original letters exactly once. The function should ignore spaces and capitalization.",
        examples: [
          {
            input: '"Listen", "Silent"',
            output: "True",
            explanation:
              "After ignoring the case and spaces, both strings are rearrangements of each other.",
          },
          {
            input: '"Dormitory", "Dirty room"',
            output: "True",
            explanation:
              "Ignoring the space and case, 'Dormitory' can be rearranged to form 'Dirty room'.",
          },
          {
            input: '"Hello", "World"',
            output: "False",
            explanation:
              "The two words don't have the same characters, so they are not anagrams.",
          },
        ],
        constraints: [
          "The input strings consist of lowercase and uppercase English letters and spaces.",
          "The length of each string is at most 10^5 characters.",
        ],
        solutionApproach: [
          "Remove all spaces and convert both strings to lowercase.",
          "Sort both strings and check if they are equal.",
          "If the sorted versions of the strings are the same, return True; otherwise, return False.",
        ],
      },
    },
    {
      id: 3,
      technology: ["Python"],
      category: "Python",
      difficulty: "Hard",
      duration: "60 mins",
      task: "Matrix rotation",
      details:
        "Rotate a given N x N matrix 90 degrees clockwise using only O(1) space.",
      detailedProblem: {
        description:
          "Given an N x N matrix, rotate the matrix by 90 degrees clockwise in place. This means that the operation should be performed without using any additional matrices (i.e., using only O(1) space).",
        examples: [
          {
            input: "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
            output: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]",
            explanation: "The matrix is rotated 90 degrees clockwise.",
          },
          {
            input:
              "[[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]",
            output:
              "[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]",
            explanation: "The matrix is rotated 90 degrees clockwise.",
          },
        ],
        constraints: [
          "The matrix will always be an N x N grid, where 1 <= N <= 1000.",
          "The matrix contains integers between -1000 and 1000.",
        ],
        solutionApproach: [
          "Transpose the matrix (swap rows with columns).",
          "Reverse each row.",
          "This will rotate the matrix 90 degrees clockwise in place.",
        ],
      },
    },
    {
      id: 4,
      technology: ["React", "useState"],
      category: "React",
      difficulty: "Easy",
      duration: "60 mins",
      task: "Simple counter component",
      details:
        "Create a React component that displays a counter with increment and decrement buttons.",
      detailedProblem: {
        description:
          "In this challenge, you will create a simple counter component in React. The counter should start from 0 and increase or decrease when buttons are clicked.",
        examples: [
          {
            input: "Initial counter value: 0. Click increment button.",
            output: "Counter value: 1",
          },
          {
            input: "Counter value: 1. Click decrement button.",
            output: "Counter value: 0",
          },
        ],
        constraints: [
          "The component should manage its own state using React hooks.",
          "The buttons should properly update the counter value.",
        ],
        solutionApproach: [
          "Use the `useState` hook to create and manage the counter state.",
          "Create two buttons that update the state using the `setState` function.",
        ],
      },
    },
    {
      id: 5,
      technology: ["React", "conditional rendering"],
      category: "React",
      difficulty: "Intermediate",
      duration: "60 mins",
      task: "Interactive card component",
      details:
        "Build a card component that reveals hidden content upon clicking.",
      detailedProblem: {
        description:
          "In this challenge, you will create an interactive card component that displays additional information when clicked. The focus is on writing clean, modular code and improving your understanding of React and DOM manipulation.",
        examples: [
          {
            input: "A card that shows details on click",
            output: "Details are revealed on clicking the card.",
          },
        ],
        constraints: [
          "Use React state to track whether the card is expanded or collapsed.",
          "Ensure the UI updates efficiently when the card is clicked.",
        ],
        solutionApproach: [
          "Use the `useState` hook to manage the card’s visibility state.",
          "Toggle the visibility of the card’s content when clicked.",
        ],
      },
    },
    {
      id: 6,
      technology: ["React", "localStorage"],
      category: "React",
      difficulty: "Hard",
      duration: "60 mins",
      task: "Todo list with React and Local Storage",
      details:
        "Create a todo list application that saves items to local storage and allows them to persist between page reloads.",
      detailedProblem: {
        description:
          "In this challenge, you will build a todo list application in React. The app should allow users to add, remove, and mark items as completed. Additionally, the todo items should be saved to local storage and persist between page reloads.",
        examples: [
          {
            input: "Add a todo item 'Buy milk'. Reload the page.",
            output: "The todo list persists, showing the 'Buy milk' item.",
          },
        ],
        constraints: [
          "The app should store and retrieve todo items from local storage.",
          "Use React state and hooks for managing the todo list.",
        ],
        solutionApproach: [
          "Use the `useState` and `useEffect` hooks to manage state and local storage.",
          "Ensure that todo items persist across page reloads by interacting with the browser’s local storage.",
        ],
      },
    },
    {
      id: 7,
      technology: ["Python", "JavaScript"],
      category: "DSA",
      difficulty: "Easy",
      duration: "60 mins",
      task: "Reverse a string",
      details: "Write a function to reverse a given string.",
      detailedProblem: {
        description:
          "Given a string, write a function to return the string in reverse order.",
        examples: [
          {
            input: '"hello"',
            output: '"olleh"',
          },
          {
            input: '"world"',
            output: '"dlrow"',
          },
        ],
        constraints: [
          "The string can contain only English letters and spaces.",
          "The maximum length of the string is 10^4.",
        ],
        solutionApproach: [
          "Use slicing or a loop to reverse the characters in the string.",
          "Return the reversed string.",
        ],
      },
    },
    {
      id: 8,
      technology: ["Python", "JavaScript"],
      category: "DSA",
      difficulty: "Intermediate",
      duration: "60 mins",
      task: "Longest palindrome substring",
      details: "Find the longest palindromic substring in a given string.",
      detailedProblem: {
        description:
          "Given a string, write a function to find the longest substring that is a palindrome.",
        examples: [
          {
            input: '"babad"',
            output: '"bab" or "aba"',
          },
          {
            input: '"cbbd"',
            output: '"bb"',
          },
        ],
        constraints: [
          "The input string consists of lowercase English letters.",
          "The length of the string is at most 1000 characters.",
        ],
        solutionApproach: [
          "Use dynamic programming or expand around center approach to find the longest palindromic substring.",
        ],
      },
    },
    {
      id: 9,
      technology: ["Python", "JavaScript"],
      category: "DSA",
      difficulty: "Hard",
      duration: "60 mins",
      task: "Find shortest path in a maze",
      details:
        "Implement an algorithm to find the shortest path in a maze using BFS.",
      detailedProblem: {
        description:
          "Given a 2D grid representing a maze, find the shortest path from the start position to the end position using Breadth-First Search (BFS).",
        examples: [
          {
            input: "[[1, 0, 1], [1, 1, 0], [0, 1, 1]]",
            output: "4",
            explanation:
              "The shortest path from the top-left to the bottom-right is 4 steps.",
          },
        ],
        constraints: [
          "The grid consists of 1s (walkable) and 0s (blocked).",
          "The size of the grid is at most 100 x 100.",
        ],
        solutionApproach: [
          "Use BFS to explore the maze level by level, keeping track of visited cells to avoid revisiting.",
        ],
      },
    },
    {
      id: 10,
      technology: ["Java"],
      category: "Java",
      difficulty: "Easy",
      duration: "60 mins",
      task: "Factorial of a number",
      details: "Write a Java program to calculate the factorial of a number.",
      detailedProblem: {
        description:
          "Given a non-negative integer, write a function to calculate its factorial.",
        examples: [
          {
            input: "5",
            output: "120",
          },
          {
            input: "0",
            output: "1",
          },
        ],
        constraints: [
          "The input is a non-negative integer.",
          "The result should fit within the range of a 64-bit integer.",
        ],
        solutionApproach: [
          "Use recursion or iteration to compute the factorial of the number.",
        ],
      },
    },
    {
      id: 11,
      technology: ["Java"],
      category: "Java",
      difficulty: "Intermediate",
      duration: "60 mins",
      task: "Check balanced parentheses",
      details:
        "Write a Java program to check if an expression has balanced parentheses.",
      detailedProblem: {
        description:
          "Given a string containing parentheses, write a function to check if the parentheses are balanced.",
        examples: [
          {
            input: '"(a + b) * (c - d)"',
            output: "True",
          },
          {
            input: '"(a + b * (c - d)"',
            output: "False",
          },
        ],
        constraints: [
          "The input string consists of alphanumeric characters and parentheses.",
          "The maximum length of the string is 1000 characters.",
        ],
        solutionApproach: [
          "Use a stack to check for matching opening and closing parentheses.",
        ],
      },
    },
    {
      id: 12,
      technology: ["Java"],
      category: "Java",
      difficulty: "Hard",
      duration: "60 mins",
      task: "Serialize and deserialize binary tree",
      details:
        "Write a Java program to serialize and deserialize a binary tree.",
      detailedProblem: {
        description:
          "Given a binary tree, write a function to serialize the tree into a string and another function to deserialize the string back into the binary tree.",
        examples: [
          {
            input: "Binary Tree: [1,2,3,null,null,4,5]",
            output: 'Serialized string: "1,2,null,null,3,4,5"',
          },
        ],
        constraints: [
          "The binary tree consists of integers.",
          "The number of nodes in the tree is at most 10000.",
        ],
        solutionApproach: [
          "Use a preorder traversal to serialize the tree and reverse the process to deserialize.",
        ],
      },
    },
  ],
};
