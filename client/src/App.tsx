
import { Routes, Route } from "react-router-dom"
import IndexPage from "./Pages/IndexPage"
import LoginPage from "./Pages/LoginPage"
import SignupPage from "./Pages/SignupPage"
import Layout from "./Layout"
import axios from "axios"
import { UserContextProvider } from "./UserContext"
import AccountPage from "./Pages/AccountPage"
import PlacesFormPage from "./Pages/PlacesFormPage"
import PlacePage from "./Pages/PlacePage"
import BookingsPage from "./Pages/BookingsPage"
import SearchPage from "./Pages/SearchPage"

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;
function App() {
 

  return (
  <>
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<IndexPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/account/:subpage?" element={<AccountPage/>} />
      <Route path="/account/:subpage?/:action" element={<AccountPage/>} />
      <Route path="/account/places/new" element={<PlacesFormPage/>} />
      <Route path="/account/places/new" element={<PlacesFormPage/>} />
      <Route path="/account/places/:id" element={<PlacesFormPage/>} />
      <Route path="/place/:id" element={<PlacePage/>} />
      <Route path="/searchplace/:search" element={<SearchPage/>} />
      <Route path="/account/bookings/" element={<BookingsPage/>} />
      
     
      </Route>
    
    </Routes>
    </UserContextProvider>
    </>
  )
}

export default App
