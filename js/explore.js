// 推荐游戏数据
const recommendedGames = [
    {
        href: "../",
        imgSrc: "../img/sprunki.png",
        alt: "Sprunki Incredibox",
        title: "Sprunki Incredibox",
        description: "Create spunky beats!"
    },
    {
        href: "../neesterversal-v3-incredibox/",
        imgSrc: "../img/neesterversal.png",
        alt: "Neesterversal v3 Incredibox",
        title: "Neesterversal v3",
        description: "20 Unique Neesters!"
    },
    {
        href: "../gray-sprunki/",
        imgSrc: "../img/gray-sprunki.png",
        alt: "Gray Sprunki Incredibox",
        title: "Gray Sprunki",
        description: "Cool Cat of Incredibox"
    },
    {
        href: "../sprunki-oc/",
        imgSrc: "../img/sprunki-oc.png",
        alt: "Sprunki OC",
        title: "Sprunki OC",
        description: "Original characters!"
    },
    {
        href: "../sprunked/",
        imgSrc: "../img/sprunked.jpg",
        alt: "Sprunked",
        title: "Sprunked",
        description: "Explore the unique cast!"
    },
    {
        href: "../dandys-world/",
        imgSrc: "../img/dandys-world.png",
        alt: "Sprunki Dandy's World",
        title: "Dandy's World",
        description: "Creepy yet captivating!"
    },
    {
        href: "../abgerny/",
        imgSrc: "../img/sprunki-abgerny.png",
        alt: "Sprunki Abgerny",
        title: "Sprunki Abgerny",
        description: "New sounds & characters!"
    },
    {
        href: "../fnf/",
        imgSrc: "../img/sprunki-fnf.jpg",
        alt: "Sprunki fnf",
        title: "Sprunki FNF",
        description: "Friday Night Funkin'!"
    }
];

// 渲染推荐游戏
function renderRecommendedGames() {
    const container = document.getElementById('recommended-games-container');
    if (!container) {
        console.error('推荐游戏容器未找到');
        return;
    }

    let html = '';

    recommendedGames.forEach(game => {
        html += `
            <a href="${game.href}" class="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-1">
                <img src="${game.imgSrc}" alt="${game.alt}" class="w-full h-24 object-cover">
                <div class="p-2">
                    <h3 class="text-sm font-semibold mb-1 text-red-700">${game.title}</h3>
                    <p class="text-xs text-gray-600">${game.description}</p>
                </div>
            </a>
        `;
    });

    container.innerHTML = html;
}

// 当DOM加载完成时执行渲染
document.addEventListener('DOMContentLoaded', renderRecommendedGames);

// 导出函数以便在其他地方使用
export { renderRecommendedGames };