// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ["nuxt-typeorm"],
	typeorm: {
		type: "sqlite",
		database: "db.sqlite",
		synchronize: true,
		logging: false,
	},
	nitro: {
		esbuild: {
			options: {
				tsconfigRaw: {
					compilerOptions: {
						emitDecoratorMetadata: true,
						experimentalDecorators: true,
					},
				},
			},
		},
		typescript: {
			tsConfig: {
				compilerOptions: {
					emitDecoratorMetadata: true,
					experimentalDecorators: true,
					strictPropertyInitialization: false,
				},
			},
		},
	}
})
