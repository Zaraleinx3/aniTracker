export default function navItems() {
  return [
    {
      icon: "home",
      description: "Home",
      route: "/",
    },
    {
      icon: "search",
      description: "Search",
      route: "/search",
    },
    {
      icon: "play_arrow",
      description: "Wip",
      route: "/list/wip",
    },
    {
      icon: "assignment",
      description: "Todo",
      route: "/list/todo",
    },
    {
      icon: "pause",
      description: "Warten",
      route: "/list/waiting",
    },
    {
      icon: "done_all",
      description: "Fertig",
      route: "/list/done",
    },
    {
      icon: "delete_forever",
      description: "Rip",
      route: "/list/rip",
    },
  ];
}
