<template>
  <div className="bg-gradient-to-r from-[#98C23C] to-[#7da52e]">
    <div className="w-[95%] lg:w-[95%] md:w-[90%] sm:w-[95%] mx-auto flex justify-between items-center text-white/90 text-sm h-10 max-w-7xl">
      <div className=" flex items-center">
        <MapPin className="w-4 h-4 mr-2" />
        <span className="text-xs uppercase tracking-wide">Samakhusi, Kathmandu</span>
      </div>
      <div className=" text-center cursor-pointer hidden lg:flex md:flex sm:hidden">
        <span className="inline-block bg-white/10 px-4 py-1 rounded-full text-xs uppercase tracking-wider transform hover:scale-105 transition-transform">Up to 40% Off Selected Items</span>
      </div>
      <Link to="tel:+9779860578585" className=" flex items-center justify-end hover:text-white transition-colors">
        <Phone className="w-4 h-4 mr-2" />
        <span className="text-xs">+977 9860578585</span>
      </Link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
