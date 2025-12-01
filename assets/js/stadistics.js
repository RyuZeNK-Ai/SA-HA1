window.addEventListener('load', function() {
    console.log('✅ Animación MUY LENTA activada');
    
    setTimeout(function() {
        const stats = document.querySelectorAll('.stat-num');
        
        function animarMuyLento() {
            console.log('🚶‍♂️ Animación MUY LENTA (6 segundos por número)');
            
            stats.forEach((stat, index) => {
                // Delay escalonado para cada número
                setTimeout(() => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    const suffix = stat.getAttribute('data-suffix') || '';
                    let current = 0;
                    
                    // Reset
                    stat.textContent = '0' + suffix;
                    stat.style.color = '#ffd700';
                    
                    // CONFIGURACIÓN MUY LENTA:
                    const duracion = 6000; // 6 SEGUNDOS
                    const pasos = 1200; // Muchos pasos para ser suave
                    const incremento = target / pasos;
                    const intervalo = duracion / pasos; // 50ms por paso
                    
                    let paso = 0;
                    
                    const timer = setInterval(() => {
                        paso++;
                        current += incremento;
                        
                        // Easing personalizado (muy suave)
                        const progreso = paso / pasos;
                        const easing = progreso < 0.5 
                            ? 2 * progreso * progreso 
                            : 1 - Math.pow(-2 * progreso + 2, 2) / 2;
                        
                        const valorMostrar = Math.round(easing * target);
                        
                        stat.textContent = valorMostrar + suffix;
                        
                        // Cambiar intensidad del color durante animación
                        const brillo = 100 + Math.round(155 * Math.sin(progreso * Math.PI));
                        stat.style.textShadow = `0 0 ${10 + brillo/10}px rgba(255, 215, 0, ${0.3 + progreso * 0.4})`;
                        
                        if (paso >= pasos) {
                            clearInterval(timer);
                            
                            // Efecto final elegante
                            stat.style.color = 'white';
                            stat.style.textShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
                            
                            // Animación de terminación
                            stat.animate([
                                { transform: 'scale(1)', opacity: 1 },
                                { transform: 'scale(1.15)', opacity: 0.9 },
                                { transform: 'scale(1)', opacity: 1 }
                            ], {
                                duration: 800,
                                easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
                            });
                        }
                    }, intervalo);
                    
                }, index * 1000); // Cada número empieza 1 segundo después del anterior
            });
        }
        
        // Iniciar después de 2 segundos
        setTimeout(animarMuyLento, 2000);
        
        window.animarSuperLento = animarMuyLento;
        
    }, 500);
});