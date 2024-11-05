function HoverButton({ children, onSelect }) {
  //   document.querySelector("button").addEventListener("click", () => {
  //     console.log("Hello FSW-2 CH 6 Part 4");
  //   });

  //   function clickHandler() {
  //     console.log("FSW-2 kalian dikasih basic malah pada ngelamun");
  //   }

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

export default HoverButton;
