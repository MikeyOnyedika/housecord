# Notes (new things I picked up along the way)

## Performing simple redirect

Perform redirect from the `/` route to the `/login` route

`useLocation` this hook returns the `location` object which contains info such as the current browser url and search parameters
`Navigate` performs a redirect to the specified path which then corresponds to the `Login` page

```jsx
import { Navigate, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return <Navigate to={`/login`} replace state={{ location }} />;
}
```

In the route setup

```jsx
<Route path="/" element={<App />} />
<Route path="/login" element={<Login />} />
```
