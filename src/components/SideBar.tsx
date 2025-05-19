
function SideBar({isOpen}:{isOpen:boolean}) {
    if(!isOpen) return;
  return (
    <div className="fixed  pt-16 right-0 border w-full h-full bg-black z-10">
        sidebar
    </div>
  )
}

export default SideBar