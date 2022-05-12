
function InscriptionsPage() {

    return (
        <div class="bg-cover bg-no-reapeat p-8 justify-center items-center h-screen flex bg-[url('../img/bbi.png')]" >
          <form className='flex'>
            <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1' id='email' type='email' aria-label='email address' placeholder='Enter your email address' />
            <button className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r' type='submit'>
              Envoyer
            </button>
          </form>
        </div>
      )

}

export default InscriptionsPage;
