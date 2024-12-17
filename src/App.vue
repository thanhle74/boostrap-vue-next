<template>
	<BContainer>
		<BRow class="mb-3">
			<BCol cols="2" class="me-auto p-3 bg-danger">cols="2"</BCol>
			<BCol cols="6" class="me-auto p-3 bg-primary">cols="6"</BCol>
			<BCol cols="4" class="p-3 bg-info">cols="4"</BCol>
		</BRow>
	</BContainer>
	<BContainer>
		<BRow>
			<BCol cols="4" class="me-auto p-3">
				<BListGroup>
					<router-link to="/form">
						<BListGroupItem button>Form</BListGroupItem>
					</router-link>
					<router-link to="/card">
						<BListGroupItem button>Card</BListGroupItem>
					</router-link>
					<router-link to="/table">
						<BListGroupItem button>Table</BListGroupItem>
					</router-link>
					<router-link to="/chart">
						<BListGroupItem button>Chart</BListGroupItem>
					</router-link>
				</BListGroup>
			</BCol>
			<BCol cols="8" class="me-auto p-3">
				<router-view></router-view>
			</BCol>
		</BRow>
	</BContainer>
</template>