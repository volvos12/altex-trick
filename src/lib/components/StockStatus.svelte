<script>
    const StockIcon = `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                           className="stock-icon">
        <g clip-path="url(#clip0_1_616)">
            <path
                d="M5.5 0.9375L5.55 0.9875C5.55 0.9875 6.15 2.7875 7.4 3.9875C8.65 5.2875 10.4 5.8875 10.4 5.8875L10.5 5.9375L10.45 5.9875C10.45 5.9875 8.65 6.5875 7.4 7.8375C6.15 9.0875 5.55 10.8375 5.55 10.8375L5.5 10.9375L5.45 10.8875C5.45 10.8875 4.85 9.0875 3.6 7.8875C2.35 6.5375 0.6 5.9375 0.6 5.9375H0.5L0.55 5.8875C0.55 5.8875 2.35 5.2875 3.6 4.0375C4.85 2.7875 5.45 1.0375 5.45 1.0375L5.5 0.9375Z"
                fill="#319D10"></path>
        </g>
        <defs>
            <clipPath id="clip0_1_616">
                <rect width="10" height="10" fill="white" transform="translate(0.5 0.9375)"></rect>
            </clipPath>
        </defs>
    </svg>`;

</script>

<div class="flex gap-1 items-center text-sm text-lime-700">
    <div>
        {@html StockIcon}
    </div>
    <span>in stoc</span>
</div>