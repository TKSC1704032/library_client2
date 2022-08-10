import Appbars from './appbar'
import SearchBooks from './component/searchbooks'
import AdminShowbooks from './component/showAdminbook'
export default function Adminpage() {
  return (
    <><div style={{backgroundColor:"GrayText"}}>

<Appbars/>
<SearchBooks/>
<AdminShowbooks/>
    </div>


    </>
  )
}
