import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="140px 0 140px 0"
			background="#FFFFFF url(https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 100% 100% /contain no-repeat scroll padding-box"
			min-height="60vh"
			lg-background="#fff"
			md-padding="96px 0 70px 0"
			sm-padding="72px 0 70px 0"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Qualidade & Confiança
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL2" font="--lead" lg-text-align="center">
					A Solo Fértil possui mais de 50 tipos de fertilizantes, adubos foliares entre outros produtos, disponíveis pelo melhor preço do mercado.{"\n\n"}
				</Text>
				<Box display="flex" sm-flex-direction="column" sm-text-align="center">
					<Link
						href="#"
						padding="12px 24px 12px 24px"
						color="--light"
						text-decoration-line="initial"
						font="normal 700 20px/1.5 --fontFamily-sans"
						border-radius="8px"
						margin="0px 16px 0px 0px"
						sm-margin="0px 0px 16px 0px"
						sm-text-align="center"
						hover-background="--color-orange"
						hover-transition="background-color 0.2s ease-in-out 0s"
						flex-direction="row"
						background="#51df71"
						border-color="#ffffff"
						transition="background-color 0.2s ease-in-out 0s"
					>
						Ver Produtos
					</Link>
					<Link
						href="#"
						padding="12px 24px 12px 24px"
						color="--darkL1"
						text-decoration-line="initial"
						font="--lead"
						border-radius="8px"
						margin="0px 16px 0px 0px"
						border-width="1px"
						border-style="solid"
						border-color="--color-grey"
						sm-margin="0px 0px 0px 0px"
						sm-text-align="center"
						lg-margin="0px 0px 0px 0px"
						hover-transition="border 0.2s ease-in-out 0s"
						hover-border-color="--color-orange"
						transition="border 0.2s ease-in-out 0s"
					>
						Entrar em Contato
					</Link>
				</Box>
			</Box>
			<Box
				display="flex"
				width="50%"
				justify-content="center"
				overflow-y="hidden"
				overflow-x="hidden"
				lg-width="100%"
			/>
		</Section>
		<Section padding="80px 0 90px 0" quarkly-title="Product-3">
			<Override slot="SectionContent" align-items="center" />
			<Text
				margin="0px 0px 20px 0px"
				font="normal 600 56px/1.2 --fontFamily-sans"
				text-align="center"
				lg-width="70%"
				md-width="100%"
			>
				Produtos
			</Text>
			<Text
				margin="0px 0px 70px 0px"
				text-align="center"
				font="normal 300 31px/1.5 --fontFamily-sansHelvetica"
				color="#7c7f81"
				padding="0px 280px 0px 280px"
				lg-padding="0px 0 0px 0"
				lg-margin="0px 0px 50px 0px"
			>
				Conheça alguns de nossos Produtos{"\n\n"}
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-template-rows="auto"
				grid-gap="0 35px"
				md-grid-template-columns="1fr"
				md-grid-gap="40px 0"
				margin="0px 0px 50px 0px"
				md-margin="0px 0px 50px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
				>
					<Image
						src="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
						display="block"
						max-width="100%"
						margin="0px 0px 25px 0px"
						height="300px"
						width="100%"
						object-fit="cover"
						sm-height="220px"
						srcSet="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=500 500w,https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=800 800w,https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1080 1080w,https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1600 1600w,https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2000 2000w,https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2600 2600w,https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="0px 0px 15px 0px" color="#89929c" font="normal 300 16px/1.5 --fontFamily-sansHelvetica">
						Adubos
					</Text>
					<Text margin="0px 0px 15px 0px" font="normal 600 24px/1.2 --fontFamily-sans" text-align="center">
						Corresolo
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
				>
					<Image
						src="https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
						display="block"
						max-width="100%"
						margin="0px 0px 25px 0px"
						height="300px"
						width="100%"
						object-fit="cover"
						sm-height="220px"
						srcSet="https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="0px 0px 15px 0px" color="#89929c" font="normal 300 16px/1.5 --fontFamily-sansHelvetica">
						Fertilizantes
					</Text>
					<Text margin="0px 0px 15px 0px" font="normal 600 24px/1.2 --fontFamily-sans" text-align="center">
						Fert Aza Pironim
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
				>
					<Image
						src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
						display="block"
						max-width="100%"
						margin="0px 0px 25px 0px"
						height="300px"
						width="100%"
						object-fit="cover"
						sm-height="220px"
						srcSet="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=500 500w,https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=800 800w,https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1080 1080w,https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1600 1600w,https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2000 2000w,https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2600 2600w,https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="0px 0px 15px 0px" color="#89929c" font="normal 300 16px/1.5 --fontFamily-sansHelvetica">
						Nutrientes
					</Text>
					<Text margin="0px 0px 15px 0px" font="normal 600 24px/1.2 --fontFamily-sans" text-align="center">
						Manganês 11%
					</Text>
				</Box>
			</Box>
			<Link
				href="#"
				padding="12px 24px 12px 24px"
				color="--light"
				text-decoration-line="initial"
				font="normal 700 20px/1.5 --fontFamily-sans"
				border-radius="8px"
				margin="0px 16px 0px 0px"
				sm-margin="0px 0px 16px 0px"
				sm-text-align="center"
				hover-background="--color-orange"
				hover-transition="background-color 0.2s ease-in-out 0s"
				flex-direction="row"
				background="#51df71"
				border-color="#ffffff"
				transition="background-color 0.2s ease-in-out 0s"
				width="300px"
				display="flex"
				align-items="center"
				justify-content="center"
				align-content="center"
			>
				Ver Catálogo
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"668302911d712a002335be66"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});