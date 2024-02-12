import './FormPage.css'
import { useState } from "react"
import { Sidebar } from '../components/Sidebar/Siderbar'
import { FormOne } from '../components/Form/FormOne'
import { FormTwo } from '../components/Form/FormTwo'
import { FormTree } from '../components/Form/FormTree'

function Form() {
  
  const [showFormTwo, setShowFormTwo] = useState(false);
  const [showFormTree, setShowFormTree] = useState(false);

  const handleFormOneSubmit = () => {
    setShowFormTwo(true);
  };

  const handleFormTwoSubmit = () => {
    setShowFormTree(true);
  };
  
  return (
    <>
      <section className="form-container">
        <Sidebar />
        {showFormTree ? (
          <FormTree />
        ) : showFormTwo ? (
          <FormTwo onSubmit={handleFormTwoSubmit} />
        ) : (
          <FormOne onSubmit={handleFormOneSubmit} />
        )}
      </section>
    </>
  )
}

export default Form