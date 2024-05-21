tailwind.config = {
	theme: {
		fontFamily: {
			signika: ["Signika", "sans-serif"],
			roboto: ["Roboto", "sans-serif"],
		},
		extend: {
			colors: {
				clifford: '#da373d',
				bgclr1: '#0B172C',
				borderclr1: 'rgba(255, 255, 255, 0.08)',
				bgclr2: 'rgba(37, 75, 138, 0.15)',
				borderclr2: 'rgba(255, 255, 255, 0.07)',
				bgclrbtn1: '#1DAFA7',
				bgclrhvr: 'rgba(29, 175, 167, 0.07)',
				bgclr3: 'rgba(29, 175, 167, 0.2)',
				bgclr4: 'rgba(255, 103, 103, 0.3)',
				bgclr5: 'rgba(29, 175, 70, 0.3)',
				bgclr6: 'rgba(29, 175, 167, 0.15)',
				bgclr7: 'rgba(175, 152, 29, 0.3)',
				textclr1: '#AF981D'
			},
			blur: {
				filter1: 'blur(27.5px);'
			},
			spacing: {
				'8xl': '40rem'
			}
		}
	}
}