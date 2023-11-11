export default eventHandler(event=>{
    return sendRedirect(event,"my-new-domain",302)
})