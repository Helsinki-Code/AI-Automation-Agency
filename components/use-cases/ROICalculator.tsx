
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";

export function ROICalculator() {
  const [employees, setEmployees] = useState("");
  const [avgSalary, setAvgSalary] = useState("");
  const [industry, setIndustry] = useState("");
  const [results, setResults] = useState<any>(null);

  const calculateROI = () => {
    const numEmployees = parseInt(employees) || 0;
    const salary = parseInt(avgSalary) || 0;
    
    const industryMultipliers = {
      "financial": { efficiency: 0.85, cost_reduction: 0.94 },
      "healthcare": { efficiency: 0.65, cost_reduction: 0.75 },
      "manufacturing": { efficiency: 0.98, cost_reduction: 0.60 },
      "retail": { efficiency: 0.75, cost_reduction: 0.75 },
      "logistics": { efficiency: 0.50, cost_reduction: 0.35 },
      "education": { efficiency: 0.78, cost_reduction: 0.45 }
    };

    const multiplier = industryMultipliers[industry as keyof typeof industryMultipliers] || 
                     { efficiency: 0.70, cost_reduction: 0.65 };

    const annualLaborCost = numEmployees * salary;
    const efficiencyGains = annualLaborCost * multiplier.efficiency;
    const costSavings = annualLaborCost * multiplier.cost_reduction;
    const totalSavings = efficiencyGains + costSavings;
    const implementationCost = numEmployees * 5000; // Estimated implementation cost per employee
    const roi = ((totalSavings - implementationCost) / implementationCost) * 100;

    setResults({
      annualSavings: totalSavings,
      implementationCost,
      roi,
      paybackMonths: Math.ceil((implementationCost / totalSavings) * 12),
      efficiencyGains: efficiencyGains
    });
  };

  return (
    <section id="calculator" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#120B2E] to-[#1A0B3A]" />
      <div className="absolute inset-0 grid-overlay opacity-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-6">
            <Calculator className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white">ROI Calculator</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Calculate Your AI Investment Return
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get instant estimates of potential savings and ROI from implementing our AI solutions in your organization.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Your Organization</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Number of Employees
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 100"
                  value={employees}
                  onChange={(e) => setEmployees(e.target.value)}
                  className="bg-gray-800/50 border-gray-700 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Average Annual Salary ($)
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 75000"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(e.target.value)}
                  className="bg-gray-800/50 border-gray-700 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Industry
                </label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="financial">Financial Services</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="retail">Retail & E-commerce</SelectItem>
                    <SelectItem value="logistics">Transportation & Logistics</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={calculateROI}
                disabled={!employees || !avgSalary || !industry}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl font-semibold"
              >
                <Calculator className="mr-2 w-5 h-5" />
                Calculate ROI
              </Button>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Projected Results</h3>
              
              {results ? (
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className="w-6 h-6 text-green-400" />
                      <span className="text-green-400 font-semibold">Annual Savings</span>
                    </div>
                    <div className="text-3xl font-bold text-white">
                      ${results.annualSavings.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-6 h-6 text-blue-400" />
                      <span className="text-blue-400 font-semibold">ROI</span>
                    </div>
                    <div className="text-3xl font-bold text-white">
                      {results.roi.toFixed(0)}%
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <div className="text-gray-400 text-sm">Implementation Cost</div>
                      <div className="text-xl font-bold text-white">
                        ${results.implementationCost.toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <div className="text-gray-400 text-sm">Payback Period</div>
                      <div className="text-xl font-bold text-white">
                        {results.paybackMonths} months
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-gray-300 text-sm mb-4">
                      These are estimated projections based on industry averages. 
                      Actual results may vary based on implementation specifics.
                    </p>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Get Detailed Assessment
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 text-gray-500">
                  <div className="text-center">
                    <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Fill in your details to see projected ROI</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
