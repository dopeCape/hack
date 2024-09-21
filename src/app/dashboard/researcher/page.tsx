import BloodLevelsByAgeComponent from "@/components/blood-levels-by-age";
import BloodPressureDistributionComponent from "@/components/blood-pressure-distribution";
import HeartRateTrendsComponent from "@/components/heart-rate-trends";
import RespiratoryVsTemperatureComponent from "@/components/respiratory-vs-temperature";
import StressLevelsByAgeComponent from "@/components/stress-levels-by-age";

export default function ReasearchDashboard(){
    
    return(
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
            <div className="h-[200px]" >

            <BloodLevelsByAgeComponent />
            </div>
            <div>

            <BloodPressureDistributionComponent/>
            </div>
            <div>

            <HeartRateTrendsComponent/>
            </div>
            <div>

            <RespiratoryVsTemperatureComponent/>
            </div>
            <div>
                
            </div>
            <StressLevelsByAgeComponent/>
        </div>
    )
}