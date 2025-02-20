import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaComment,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (formData.phone.trim() && formData.phone.length > 15) {
      newErrors.phone = "Telefone deve ter no máximo 15 caracteres";
    }
    if (!formData.message.trim()) newErrors.message = "Mensagem é obrigatória";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulário válido:", formData);
      setSubmitted(true);

      // Formatar mensagem com os dados do formulário
      const message = encodeURIComponent(`
        Nome: ${formData.name}
        Email: ${formData.email}
        Telefone: ${formData.phone || "Não informado"}
        Mensagem: ${formData.message}
      `);

      // Criar link do WhatsApp com a mensagem
      const whatsappUrl = `https://wa.me/5544984470051?text=${message}`;

      // Redirecionar para o WhatsApp
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <section ref={ref} id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Contato <span className="text-orange-500">Mult Car</span>
            </h2>
            <p className="text-gray-600">
              Entre em contato e solicite um orçamento
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulário */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              {submitted ? (
                <div className="text-center text-green-600">
                  Mensagem enviada com sucesso!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nome */}
                  <div>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu Nome"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Seu Email"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Telefone */}
                  <div>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Seu Telefone (opcional)"
                        maxLength={15}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Mensagem */}
                  <div>
                    <div className="relative">
                      <FaComment className="absolute left-3 top-4 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Sua Mensagem"
                        rows="4"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                    </div>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>

            {/* Informações de Contato */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-4 text-orange-500 text-2xl" />
                  <div>
                    <h4 className="font-semibold">Endereço</h4>
                    <p className="text-gray-600">
                      Avenida Alexandre ceranto, Jardim Nova América, 2368,
                      Umuarama - PR
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-4 text-orange-500 text-2xl" />
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-gray-600">(44) 98447-0051</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-4 text-orange-500 text-2xl" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">contato@multcar.com.br</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.278362681068!2d-53.29421582466311!3d-23.78197087864892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f2d156dc95fbcb%3A0x1a20aabd8f4a2f1a!2sMulticar%20Funilaria%20e%20Pintura!5e1!3m2!1spt-BR!2sbr!4v1737690824536!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
