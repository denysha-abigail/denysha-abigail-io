import { CircleMenu, CircleMenuItem } from "react-circular-menu";

export function Menu() {
    return (
      <div className="menu" style={{ marginTop: "700px", marginLeft: "75px" }}>
        <CircleMenu
          startAngle={90}
          rotationAngle={-270}
          itemSize={2}
          radius={4}
          rotationAngleInclusive={false}
        >
          <CircleMenuItem
            tooltip="Home"
            tooltipPlacement="left"
          >
            <i class="fa-solid fa-shuttle-space"/>
          </CircleMenuItem>
          <CircleMenuItem tooltip="About" tooltipPlacement="right">
          <i class="fa-solid fa-shuttle-space"/>
          </CircleMenuItem>
          <CircleMenuItem tooltip="Contact" tooltipPlacement="right">
          <i class="fa-solid fa-shuttle-space"/>
          </CircleMenuItem>
          <CircleMenuItem tooltip="Projects" tooltipPlacement="left">
          <i class="fa-solid fa-shuttle-space"/>
          </CircleMenuItem>
        </CircleMenu>
      </div>
    );
  }

  export default Menu;