
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import PaginaPrincipal from './Pages/Principal'
import PaginaEdicao from './Pages/Edicao'

/* Skills */
import EditSkills from './Pages/Edicao/EditSkills'
import AddSkills from './Pages/Edicao/EditSkills/AddSkills'
import EditingSkills from './Pages/Edicao/EditSkills/EditingSkills'

/* Certificates */
import EditCertificates from './Pages/Edicao/EditCertificates'
import AddCertificates from './Pages/Edicao/EditCertificates/AddCertificates'
import EditingCertificates from './Pages/Edicao/EditCertificates/EditingCertificate'

/* AboutMe */
import EditAboutMe from './Pages/Edicao/EditAboutMe'
import EditingAboutMe from './Pages/Edicao/EditAboutMe/EditingAboutMe'

export default function App(){

return(
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<PaginaPrincipal/>}/>
          <Route path='/edit' element={<PaginaEdicao/>}/>

          {/* Skills */}
          <Route path='/edit/skill' element={<EditSkills/>}/>
          <Route path='/edit/skill/add' element={<AddSkills/>}/>
          <Route path='/edit/skill/editing/:id' element={<EditingSkills/>}/>

          {/* Certificates */}
          <Route path='/edit/certificates' element={<EditCertificates/>}/>
          <Route path='/edit/certificates/add' element={<AddCertificates/>}/>
          <Route path='/edit/certificates/editing/:id' element={<EditingCertificates/>}/>

          {/* AboutMe */}
          <Route path='/edit/aboutme' element={<EditAboutMe/>}/>
          <Route path='/edit/aboutme/editing/:id' element={<EditingAboutMe/>}/>

        </Routes>
      </Router>
    </div>
  )
}