import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "저는 이러한 사람이에요!"
      }
      // {
      //   id: "github-stats",
      //   title: "Github Stats",
      //   file: "markdown/github-stats.md",
      //   icon: "i-icon-park-outline:github",
      //   excerpt: "Github에 이런저런 일들을 벌여놓았어요"
      // },
      // {
      //   id: "about-site",
      //   title: "About This Site",
      //   file: "markdown/about-site.md",
      //   icon: "i-octicon:browser",
      //   excerpt: "이 사이트는 어떻게 만들어졌을까요?"
      // }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "retirement-pension-simulator",
        title: "연금계산기",
        file: "https://raw.githubusercontent.com/saul-atomrigs/retirement-pension-simulator/main/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "연금 계산 시뮬레이터",
        link: "https://github.com/saul-atomrigs/retirement-pension-simulator"
      },
      {
        id: "income-tax-calculator",
        title: "소득세 계산기",
        file: "https://raw.githubusercontent.com/saul-atomrigs/income-tax-calculator/main/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "소득세 및 환급액 계산기",
        link: "https://github.com/saul-atomrigs/income-tax-calculator"
      },
      {
        id: "cafe-pos-application",
        title: "카페 POS 시스템",
        file: "https://raw.githubusercontent.com/saul-atomrigs/cafe-pos-application/main/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "카페 전용 POS기 애플리케이션",
        link: "https://github.com/saul-atomrigs/cafe-pos-application"
      },
      {
        id: "design-system",
        title: "Design System",
        file: "https://raw.githubusercontent.com/saul-atomrigs/design-system/main/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "디자인 시스템",
        link: "https://github.com/saul-atomrigs/design-system"
      },
      {
        id: "hangeul",
        title: "한글 포맷 라이브러리",
        file: "https://raw.githubusercontent.com/saul-atomrigs/hangeul/main/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "한글 포맷 라이브러리",
        link: "https://github.com/saul-atomrigs/hangeul"
      },
      {
        id: "react-utils",
        title: "React Utils",
        file: "https://raw.githubusercontent.com/saul-atomrigs/react-utils/main/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "React 유틸리티 라이브러리",
        link: "https://github.com/saul-atomrigs/react-utils"
      }
    ]
  }
];

export default bear;
