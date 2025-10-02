// Sample blog data
export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use React Hooks to manage state and side effects in functional components. This comprehensive guide covers useState, useEffect, and custom hooks.",
    content: `React Hooks revolutionized the way we write React components. Before hooks, we had to use class components to manage state and lifecycle methods. Now, we can do everything in functional components.

The useState hook is the most basic hook that allows you to add state to functional components. Here's a simple example:

const [count, setCount] = useState(0);

The useEffect hook lets you perform side effects in your components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined in React classes.

useEffect(() => {
  document.title = \`You clicked \${count} times\`;
}, [count]);

Custom hooks are a mechanism to reuse stateful logic between components. They're just JavaScript functions that can call other hooks and help you extract component logic into reusable functions.

The beauty of hooks is that they allow you to share stateful logic without changing your component hierarchy. This makes your code more readable and easier to test.`,
    category: "React",
    tags: ["React", "Hooks", "JavaScript", "Frontend"],
    author: {
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    date: "March 15, 2024",
    readingTime: 5,
    likes: 42,
    comments: 12,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Modern CSS Grid Layouts",
    excerpt: "Discover the power of CSS Grid for creating complex, responsive layouts. From basic grid concepts to advanced techniques.",
    content: `CSS Grid Layout is a two-dimensional layout method for CSS. It can handle both columns and rows, unlike flexbox which is largely a one-dimensional method.

Grid is incredibly powerful for creating complex layouts that were previously difficult or impossible to achieve with traditional CSS layout methods.

Here's a basic grid setup:

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

The grid-template-columns property defines the number and size of columns in your grid. The 'fr' unit represents a fraction of the available space.

You can create responsive grids using auto-fit and minmax():

grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

This creates a responsive grid where each column is at least 300px wide, and the number of columns adjusts based on the available space.

CSS Grid also supports named lines, grid areas, and subgrids, making it incredibly flexible for modern web layouts.`,
    category: "CSS",
    tags: ["CSS", "Grid", "Layout", "Responsive Design"],
    author: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    date: "March 12, 2024",
    readingTime: 4,
    likes: 28,
    comments: 8,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "JavaScript ES2023 New Features",
    excerpt: "Explore the latest features introduced in ES2023, including array methods, improved error handling, and more.",
    content: `JavaScript continues to evolve with each new ECMAScript specification. ES2023 brings several exciting new features that improve developer productivity and code readability.

One of the most notable additions is the Array.prototype.toSorted() method, which returns a new sorted array without modifying the original:

const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.toSorted(); // [1, 1, 3, 4, 5]
console.log(numbers); // [3, 1, 4, 1, 5] - original unchanged

Similarly, we got toReversed() and toSpliced() methods that follow the same pattern of returning new arrays instead of mutating the original.

Another great addition is the findLast() and findLastIndex() methods:

const items = [1, 2, 3, 4, 5];
const lastEven = items.findLast(n => n % 2 === 0); // 4

The with() method allows you to create a new array with a single element changed:

const arr = [1, 2, 3];
const newArr = arr.with(1, 'two'); // [1, 'two', 3]

These features promote immutable programming patterns and make JavaScript code more predictable and easier to debug.`,
    category: "JavaScript",
    tags: ["JavaScript", "ES2023", "Arrays", "Programming"],
    author: {
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    date: "March 10, 2024",
    readingTime: 6,
    likes: 35,
    comments: 15,
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Building Responsive Web Applications",
    excerpt: "Learn best practices for creating web applications that work seamlessly across all devices and screen sizes.",
    content: `Responsive web design is no longer optional—it's essential. With users accessing websites from phones, tablets, laptops, and desktops, your application needs to provide a great experience on every device.

The foundation of responsive design is the mobile-first approach. Start designing for the smallest screen first, then progressively enhance for larger screens:

/* Mobile first */
.container {
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}

Flexible grid systems are crucial. CSS Grid and Flexbox are your best friends:

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

Use relative units like rem, em, and percentages instead of fixed pixel values. This ensures your design scales appropriately across different devices and user preferences.

Don't forget about responsive images:

img {
  max-width: 100%;
  height: auto;
}

Test your designs on real devices, not just browser developer tools. Performance matters too—what looks good on a fast desktop might be sluggish on a mobile device.`,
    category: "Web Development",
    tags: ["Responsive Design", "CSS", "Mobile", "UX"],
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    date: "March 8, 2024",
    readingTime: 7,
    likes: 51,
    comments: 20,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop"
  },
  {
    id: 5,
    title: "The Future of Frontend Development",
    excerpt: "Exploring emerging trends and technologies that will shape the future of frontend development in the coming years.",
    content: `Frontend development is rapidly evolving, with new tools, frameworks, and paradigms emerging regularly. As we look toward the future, several trends are becoming increasingly important.

WebAssembly (WASM) is gaining traction for performance-critical applications. It allows languages like Rust, C++, and Go to run in the browser with near-native performance.

Server-side rendering (SSR) and static site generation (SSG) are becoming standard practices. Frameworks like Next.js, Nuxt.js, and SvelteKit make it easy to build fast, SEO-friendly applications.

The Jamstack architecture continues to grow in popularity:
- JavaScript for dynamic functionality
- APIs for backend services
- Markup for pre-built content

Edge computing is changing how we think about deployment. Instead of centralizing all logic in one server, we're moving computation closer to users with edge functions.

Micro-frontends are emerging as a solution for large applications. They allow different teams to work on different parts of an application independently, similar to how microservices work on the backend.

Web Components are finally gaining mainstream adoption, providing a standard way to create reusable custom elements that work across frameworks.

The future of frontend is about performance, developer experience, and user experience working together in harmony.`,
    category: "Technology",
    tags: ["Frontend", "Future", "WebAssembly", "Jamstack"],
    author: {
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    date: "March 5, 2024",
    readingTime: 8,
    likes: 67,
    comments: 25,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
  }
];