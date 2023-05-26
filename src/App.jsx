import './App.css'
import Intro from './Content/Intro'
import Layout from './Layout/Layout'

function App() {
  

  return (
    <Layout  backgroundColor='community-primary-light' buttonType={true} footerBgColor='community-primary'>
      <div className="">
        <Intro/>
      </div>
    </Layout>
  )
}

export default App
