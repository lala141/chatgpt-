function SideBarItem() {
  return (
    <div className="flex flex-col gap-1">
      <div className="bg-gray-100 rounded-sm p-2 flex flex-row items-center gap-3">
        <img
          src="./chat.png"
          style={{ width: "15px", height: "15px" }}
          alt="chat"
        />
        <span>New chat</span>
      </div>
    </div>
  );
}

export default SideBarItem;