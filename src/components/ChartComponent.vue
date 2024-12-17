<template>
	<Chart id="combined-chart" :options="chartOptions" :data="chartData" />
</template>

<script setup>
import { ref } from 'vue'
import { Chart } from 'vue-chartjs'
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement
} from 'chart.js'

// Đăng ký các thành phần cần thiết cho Bar và Line Chart
ChartJS.register(Title, Tooltip, Legend, BarElement, LineElement, CategoryScale, LinearScale, PointElement)

// Dữ liệu biểu đồ (Bar và Line trong cùng dataset)
const chartData = ref({
	labels: ['January', 'February', 'March', 'April'],
	datasets: [
		{
			type: 'bar', // Biểu đồ cột
			label: 'Bar Dataset',
			data: [40, 20, 12, 60],
			backgroundColor: '#42A5F5',
			borderColor: '#1E88E5',
			borderWidth: 1
		},
		{
			type: 'line', // Biểu đồ đường
			label: 'Line Dataset',
			data: [30, 50, 20, 80],
			borderColor: '#FF6384',
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderWidth: 2,
			tension: 0.4, // Đường cong mềm mại
			pointBackgroundColor: '#fff',
			pointBorderColor: '#FF6384',
			pointRadius: 5
		}
	]
})

// Tùy chọn biểu đồ
const chartOptions = ref({
	responsive: true,
	plugins: {
		legend: {
			display: true,
			position: 'top'
		},
		title: {
			display: true,
			text: 'Combined Bar and Line Chart'
		}
	},
	scales: {
		y: {
			beginAtZero: true
		}
	}
})
</script>